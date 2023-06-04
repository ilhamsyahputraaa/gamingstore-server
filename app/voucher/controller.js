const Voucher = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };
      const voucher = await Voucher.find();

      console.log("alert >>");
      console.log(alert);

      res.render("admin/voucher/view_voucher", {
        voucher,
        alert,
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/voucher");
    }
  },


  // viewCreate: async (req, res) => {
  //   try {
  //     res.render("admin/voucher/create");
  //   } catch (err) {
  //     req.flash("alertMessage", `${err.message}`);
  //     req.flash("alertStatus", "danger");
  //     res.redirect("/voucher");
  //   }
  // },

  // actionCreate: async (req, res) => {
  //   try {
  //     const { coinName, coinQuantity, price } = req.body;

  //     let voucher = await Voucher({ coinName, coinQuantity, price });
  //     await voucher.save();

  //     req.flash("alertMessage", "Berhasil tambah voucher");
  //     req.flash("alertStatus", "success");

  //     res.redirect("/voucher");
  //   } catch (err) {
  //     req.flash("alertMessage", `${err.message}`);
  //     req.flash("alertStatus", "danger");
  //     res.redirect("/voucher");
  //   }
  // },

  // viewEdit: async (req, res) => {
  //   try {
  //     const { id } = req.params;

  //     const voucher = await Voucher.findOne({ _id: id });

  //     res.render("admin/voucher/edit", {voucher});
  //   } catch (err) {
  //     req.flash("alertMessage", `${err.message}`);
  //     req.flash("alertStatus", "danger");
  //     res.redirect("/voucher");
  //   }
  // },

  // actionEdit: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const { coinName, coinQuantity, price } = req.body;

  //     await Voucher.findOneAndUpdate(
  //       {
  //         _id: id,
  //       },
  //       { coinName, coinQuantity, price }
  //     );

  //     req.flash("alertMessage", "Berhasil ubah kategori");
  //     req.flash("alertStatus", "success");

  //     res.redirect("/voucher");
  //   } catch (err) {
  //     req.flash("alertMessage", `${err.message}`);
  //     req.flash("alertStatus", "danger");
  //     res.redirect("/voucher");
  //   }
  // },

  // actionDelete: async (req, res) => {
  //   try {
  //     const { id } = req.params;

  //     await Voucher.findOneAndRemove({
  //       _id: id,
  //     });

  //     req.flash("alertMessage", "Berhasil hapus kategori");
  //     req.flash("alertStatus", "success");

  //     res.redirect("/voucher");
  //   } catch (err) {
  //     req.flash("alertMessage", `${err.message}`);
  //     req.flash("alertStatus", "danger");
  //     res.redirect("/voucher");
  //   }
  // },
};
