const Player = require('./model')
const Voucher = require('../voucher/model')
const bcrypt = require('bcryptjs')


module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };
      const player = await Player.find()

      console.log("alert >>");
      console.log(alert);

      res.render("admin/player/view_player", {
        player,
        alert,
        name: req.session.user.name,
        title: "Halaman Buat Pembayaran",
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/player");
    }
    },
    
};
