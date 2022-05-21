function factorial(a = 5) {
  let res = 1;
  for (let n = 1; n <= a; n++) {
    res *= n;
  }
  return res;
}
