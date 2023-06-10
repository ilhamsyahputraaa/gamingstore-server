const User = require('./model')
const bcrypt = require('bcryptjs')


module.exports = {
  viewSignin: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };
      if (req.session.user === null || req.session.user === undefined) {
        res.render("admin/users/view_signin", {
          alert,
        });
      } else {
        res.redirect('/dashboard')
      }

    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/users");
    }
  },

  actionSignin: async (req, res) => {
    try {
      const { email, password } = req.body
      const check = await User.findOne({ email: email })
      
      if (check) {
        if (check.status === "Y") {
          // const checkPassword = await bcrypt.compare(password, check.password);
          // console.log(checkPassword);
          // console.log(check);

          if (check.password === password) {
            req.session.user = {
              id: check._id,
              email: check.email,
              status: check.status,
              name: check.name,
            };
            res.redirect("/dashboard");
          } else {
            req.flash("alertMessage", `Kata Sandi Salah`);
            req.flash("alertStatus", "danger");
            res.redirect("/");
          }
        } else {
          req.flash("alertMessage", `Kata Status Anda Belum Aktif`);
          req.flash("alertStatus", "danger");
          res.redirect("/");
        }
      } else {
        req.flash("alertMessage", `Maaf email anda salah atau belum terdaftar`);
        req.flash("alertStatus", "danger");
        res.redirect("/");  
      }
    } catch (error) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/");
    }
  }


  // viewCreate: async (req, res) => {
  //   try {
  //     res.render("admin/users/create");
  //   } catch (err) {
  //     req.flash("alertMessage", `${err.message}`);
  //     req.flash("alertStatus", "danger");
  //     res.redirect("/users");
  //   }
  // },

  // actionCreate: async (req, res) => {
  //   try {
  //     const { coinName, coinQuantity, price } = req.body;

  //     let users = await Users({ coinName, coinQuantity, price });
  //     await users.save();

  //     req.flash("alertMessage", "Berhasil tambah users");
  //     req.flash("alertStatus", "success");

  //     res.redirect("/users");
  //   } catch (err) {
  //     req.flash("alertMessage", `${err.message}`);
  //     req.flash("alertStatus", "danger");
  //     res.redirect("/users");
  //   }
  // },

  // viewEdit: async (req, res) => {
  //   try {
  //     const { id } = req.params;

  //     const users = await Users.findOne({ _id: id });

  //     res.render("admin/users/edit", {users});
  //   } catch (err) {
  //     req.flash("alertMessage", `${err.message}`);
  //     req.flash("alertStatus", "danger");
  //     res.redirect("/users");
  //   }
  // },

  // actionEdit: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const { coinName, coinQuantity, price } = req.body;

  //     await Users.findOneAndUpdate(
  //       {
  //         _id: id,
  //       },
  //       { coinName, coinQuantity, price }
  //     );

  //     req.flash("alertMessage", "Berhasil ubah kategori");
  //     req.flash("alertStatus", "success");

  //     res.redirect("/users");
  //   } catch (err) {
  //     req.flash("alertMessage", `${err.message}`);
  //     req.flash("alertStatus", "danger");
  //     res.redirect("/users");
  //   }
  // },

  // actionDelete: async (req, res) => {
  //   try {
  //     const { id } = req.params;

  //     await Users.findOneAndRemove({
  //       _id: id,
  //     });

  //     req.flash("alertMessage", "Berhasil hapus kategori");
  //     req.flash("alertStatus", "success");

  //     res.redirect("/users");
  //   } catch (err) {
  //     req.flash("alertMessage", `${err.message}`);
  //     req.flash("alertStatus", "danger");
  //     res.redirect("/users");
  //   }
  // },
};
