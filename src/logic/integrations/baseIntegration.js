class BaseIntegration {
  load(data) {
    this.xp = data.xp;
    this.xk = data.xk;
    this.n = data.n;
    this.h = data.h;
    this.func = data.func;
    this.dx = (this.xk - this.xp) / this.n;
  }
}

export default BaseIntegration;
