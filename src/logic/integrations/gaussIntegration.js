class GaussIntegrarion {
  constructor(data) {
    this.data = data;
  }

  calculate() {
    let fksztalt = [[[], [], [], []], [[], [], [], []]];
    let poch_ksi = [[], []];
    let poch_ni = [[], []];
    let fun_detj = [[], []];
    let waga = [1, 1];
    let punkt = [-0.5773502692, 0.5773502692];

    let pole = 1;
    let shape = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        let wsp = 0;
        for (let jpn = 0; jpn < 2; jpn++) {
          for (let ipn = 0; ipn < 2; ipn++) {
            fksztalt[ipn][jpn][0] = 0.25 * (1 - punkt[ipn]) * (1 - punkt[jpn]);
            fksztalt[ipn][jpn][1] = 0.25 * (1 + punkt[ipn]) * (1 - punkt[jpn]);
            fksztalt[ipn][jpn][2] = 0.25 * (1 + punkt[ipn]) * (1 + punkt[jpn]);
            fksztalt[ipn][jpn][3] = 0.25 * (1 - punkt[ipn]) * (1 + punkt[jpn]);

            poch_ni[jpn][0] = -0.25 * (1 - punkt[ipn]);
            poch_ni[jpn][1] = 0.25 * (1 - punkt[ipn]);
            poch_ni[jpn][2] = 0.25 * (1 + punkt[ipn]);
            poch_ni[jpn][3] = -0.25 * (1 + punkt[ipn]);

            poch_ksi[ipn][0] = -0.25 * (1 + punkt[ipn]);
            poch_ksi[ipn][1] = -0.25 * (1 - punkt[ipn]);
            poch_ksi[ipn][2] = 0.25 * (1 + punkt[ipn]);
            poch_ksi[ipn][3] = 0.25 * (1 - punkt[ipn]);

            let FdXdQ =
              poch_ni[jpn][0] * this.data[0].x +
              poch_ni[jpn][1] * this.data[1].x +
              poch_ni[jpn][2] * this.data[2].x +
              poch_ni[jpn][3] * this.data[3].x;

            let FdYdQ =
              poch_ni[jpn][0] * this.data[0].y +
              poch_ni[jpn][1] * this.data[1].y +
              poch_ni[jpn][2] * this.data[2].y +
              poch_ni[jpn][3] * this.data[3].y;

            let FdXdE =
              poch_ksi[ipn][0] * this.data[0].x +
              poch_ksi[ipn][1] * this.data[1].x +
              poch_ksi[ipn][2] * this.data[2].x +
              poch_ksi[ipn][3] * this.data[3].x;

            let FdYdE =
              poch_ksi[ipn][0] * this.data[0].y +
              poch_ksi[ipn][1] * this.data[1].y +
              poch_ksi[ipn][2] * this.data[2].y +
              poch_ksi[ipn][3] * this.data[3].y;

            fun_detj[ipn][jpn] = FdXdQ * FdYdE - FdXdE * FdYdQ;

            wsp = fun_detj[ipn][jpn] * waga[ipn] * waga[jpn];

            shape = fksztalt[ipn][jpn][i];
          }
        }

        pole = pole * wsp * shape;
      }
    }

    return pole;
  }
}
module.exports = GaussIntegrarion;
