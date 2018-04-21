#include <iostream>
#include <ctime>

using namespace std;

long long int siirtoja = 0;
long long int kutsuja = 0;

void print_move(char fr, char to) {
  siirtoja++;
  // cout << "move from " + fr + " to " + to << endl;
}

void towers(int n, char fr, char to, char spare) {
  kutsuja++;
  if (n == 1)
    print_move(fr, to);
  else {
    towers(n-1, fr, spare, to);
    towers(1, fr, to, spare);
    towers(n-1, spare, to, fr);
  }
}

int main() {
  clock_t begin = clock();
  towers(30, 's', 'h', 'e'); // ei voi kasvattaa, menee yli int max
  clock_t end = clock();
  double time_spent = (double)(end - begin) / CLOCKS_PER_SEC;
  cout << time_spent << endl;
  cout << "siirtoja " << siirtoja  << endl;
  cout << "kutsuja " << kutsuja  << endl;
  return 0;
}