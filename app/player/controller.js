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
    
//   actionSignin: async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       const check = await Player.findOne({ email: email });

//       if (check) {
//         if (check.status === "Y") {
//           // const checkPassword = await bcrypt.compare(password, check.password);
//           // console.log(checkPassword);
//           // console.log(check);

//           if (check.password === password) {
//             req.session.player = {
//               id: check._id,
//               email: check.email,
//               status: check.status,
//               name: check.name,
//             };
//             res.redirect("/dashboard");
//           } else {
//             req.flash("alertMessage", `Kata Sandi Salah`);
//             req.flash("alertStatus", "danger");
//             res.redirect("/");
//           }
//         } else {
//           req.flash("alertMessage", `Kata Status Anda Belum Aktif`);
//           req.flash("alertStatus", "danger");
//           res.redirect("/");
//         }
//       } else {
//         req.flash("alertMessage", `Maaf email anda salah atau belum terdaftar`);
//         req.flash("alertStatus", "danger");
//         res.redirect("/");
//       }
//     } catch (error) {
//       req.flash("alertMessage", `${err.message}`);
//       req.flash("alertStatus", "danger");
//       res.redirect("/");
//     }
//   },

//   actionLogout: (req, res) => {
//     req.session.destroy();
//     res.redirect("/");
//   },

//   // viewCreate: async (req, res) => {
//   //   try {
//   //     res.render("admin/players/create");
//   //   } catch (err) {
//   //     req.flash("alertMessage", `${err.message}`);
//   //     req.flash("alertStatus", "danger");
//   //     res.redirect("/players");
//   //   }
//   // },

//   // actionCreate: async (req, res) => {
//   //   try {
//   //     const { coinName, coinQuantity, price } = req.body;

//   //     let players = await Players({ coinName, coinQuantity, price });
//   //     await players.save();

//   //     req.flash("alertMessage", "Berhasil tambah players");
//   //     req.flash("alertStatus", "success");

//   //     res.redirect("/players");
//   //   } catch (err) {
//   //     req.flash("alertMessage", `${err.message}`);
//   //     req.flash("alertStatus", "danger");
//   //     res.redirect("/players");
//   //   }
//   // },

//   // viewEdit: async (req, res) => {
//   //   try {
//   //     const { id } = req.params;

//   //     const players = await Players.findOne({ _id: id });

//   //     res.render("admin/players/edit", {players});
//   //   } catch (err) {
//   //     req.flash("alertMessage", `${err.message}`);
//   //     req.flash("alertStatus", "danger");
//   //     res.redirect("/players");
//   //   }
//   // },

//   // actionEdit: async (req, res) => {
//   //   try {
//   //     const { id } = req.params;
//   //     const { coinName, coinQuantity, price } = req.body;

//   //     await Players.findOneAndUpdate(
//   //       {
//   //         _id: id,
//   //       },
//   //       { coinName, coinQuantity, price }
//   //     );

//   //     req.flash("alertMessage", "Berhasil ubah kategori");
//   //     req.flash("alertStatus", "success");

//   //     res.redirect("/players");
//   //   } catch (err) {
//   //     req.flash("alertMessage", `${err.message}`);
//   //     req.flash("alertStatus", "danger");
//   //     res.redirect("/players");
//   //   }
//   // },

//   // actionDelete: async (req, res) => {
//   //   try {
//   //     const { id } = req.params;

//   //     await Players.findOneAndRemove({
//   //       _id: id,
//   //     });

//   //     req.flash("alertMessage", "Berhasil hapus kategori");
//   //     req.flash("alertStatus", "success");

//   //     res.redirect("/players");
//   //   } catch (err) {
//   //     req.flash("alertMessage", `${err.message}`);
//   //     req.flash("alertStatus", "danger");
//   //     res.redirect("/players");
//   //   }
//   // },
};
