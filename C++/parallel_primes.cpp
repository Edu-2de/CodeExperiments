#include <iostream>
#include <vector>
#include <thread>
#include <mutex>
#include <atomic>
#include <condition_variable>

std::atomic<int> primes_found{0};
std::mutex cout_mutex;
std::condition_variable cv;
bool done = false;

bool is_prime(int n) {
    if (n < 2) return false;
    for (int i = 2; i*i <= n; ++i)
        if (n % i == 0) return false;
    return true;
}

void prime_worker(int start, int end, std::vector<int>& primes) {
    for (int i = start; i < end; ++i) {
        if (is_prime(i)) {
            primes.push_back(i);
            ++primes_found;
        }
    }
}

void progress_reporter(int total) {
    while (!done) {
        {
            std::unique_lock<std::mutex> lock(cout_mutex);
            std::cout << "\rPrimes found: " << primes_found << " / " << total << std::flush;
        }
        std::this_thread::sleep_for(std::chrono::milliseconds(200));
    }
    std::unique_lock<std::mutex> lock(cout_mutex);
    std::cout << "\rPrimes found: " << primes_found << " / " << total << " (done!)" << std::endl;
}

int main() {
    const int N = 100000;
    const int num_threads = std::thread::hardware_concurrency();
    std::vector<std::vector<int>> all_primes(num_threads);
    std::vector<std::thread> threads;

    int chunk = N / num_threads;
    std::thread reporter(progress_reporter, N);

    for (int t = 0; t < num_threads; ++t) {
        int start = t * chunk;
        int end = (t == num_threads - 1) ? N : (t + 1) * chunk;
        threads.emplace_back(prime_worker, start, end, std::ref(all_primes[t]));
    }

    for (auto& th : threads) th.join();
    done = true;
    reporter.join();

    // Opcional: mostrar quantidade total de primos encontrados
    int total_primes = 0;
    for (const auto& v : all_primes) total_primes += v.size();
    std::cout << "Total primes: " << total_primes << std::endl;
}