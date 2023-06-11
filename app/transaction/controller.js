const Transaction = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };
      const transaction = await Transaction.find().populate('player')

      console.log("alert >>");
      console.log(transaction);

      res.render("admin/transaction/view_transaction", {
        transaction,
        alert,
        name: req.session.user.name,
        title: "Halaman Transaksi",
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/transaction");
    }
  },

  actionStatus: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.query;

      await Transaction.findByIdAndUpdate(
        {
          _id: id,
        },
        { status }
      );

      req.flash("alertMessage", "Berhasil Ubah Status");
      req.flash("alertStatus", "success");

      res.redirect("/transaction");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/transaction");
    }
  },

  // actionCreate: async (req, res) => {
  //   try {
  //     const { name, category, nominals } = req.body;

  //     if (req.file) {
  //       let tmp_path = req.file.path;
  //       let originalExt =
  //         req.file.originalname.split(".")[
  //           req.file.originalname.split(".").length - 1
  //         ];
  //       let filename = req.file.filename + "." + originalExt;
  //       let target_path = path.resolve(
  //         config.rootPath,
  //         `public/uploads/${filename}`
  //       );

  //       const src = fs.createReadStream(tmp_path);
  //       const dest = fs.createWriteStream(target_path);

  //       src.pipe(dest);

  //       src.on("end", async () => {
  //         try {
  //           const transaction = new Transaction({
  //             name,
  //             category,
  //             nominals,
  //             thumbnail: filename,
  //             name: req.session.user.name,
  //             title: "Halaman Transaction",
  //           });

  //           await transaction.save();

  //           req.flash("alertMessage", "Berhasil tambah transaction");
  //           req.flash("alertStatus", "success");

  //           res.redirect("/transaction");
  //         } catch (err) {
  //           req.flash("alertMessage", `${err.message}`);
  //           req.flash("alertStatus", "danger");
  //           res.redirect("/transaction");
  //         }
  //       });
  //     } else {
  //       const transaction = new Transaction({
  //         name,
  //         category,
  //         nominals,
  //       });
  //       await transaction.save();

  //       req.flash("alertMessage", "Berhasil tambah transaction");
  //       req.flash("alertStatus", "success");

  //       res.redirect("/transaction");
  //     }
  //   } catch (err) {
  //     req.flash("alertMessage", `${err.message}`);
  //     req.flash("alertStatus", "danger");
  //     res.redirect("/transaction");
  //   }
  // },

  // viewEdit: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const category = await Category.find();
  //     const nominal = await Nominal.find();

  //     const transaction = await Transaction.findOne({ _id: id })
  //       .populate("category")
  //       .populate("nominals");

  //     res.render("admin/transaction/edit", {
  //       transaction,
  //       nominal,
  //       category,
  //       name: req.session.user.name,
  //       title: "Halaman Edit Transaction",
  //     });
  //   } catch (err) {
  //     req.flash("alertMessage", `${err.message}`);
  //     req.flash("alertStatus", "danger");
  //     res.redirect("/transaction");
  //   }
  // },

  // actionEdit: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const { name, category, nominals } = req.body;

  //     if (req.file) {
  //       let tmp_path = req.file.path;
  //       let originaExt =
  //         req.file.originalname.split(".")[
  //           req.file.originalname.split(".").length - 1
  //         ];
  //       let filename = req.file.filename + "." + originaExt;
  //       let target_path = path.resolve(
  //         config.rootPath,
  //         `public/uploads/${filename}`
  //       );

  //       const src = fs.createReadStream(tmp_path);
  //       const dest = fs.createWriteStream(target_path);

  //       src.pipe(dest);

  //       src.on("end", async () => {
  //         try {
  //           const transaction = await Transaction.findOne({ _id: id });

  //           let currentImage = `${config.rootPath}/public/uploads/${transaction.thumbnail}`;
  //           if (fs.existsSync(currentImage)) {
  //             fs.unlinkSync(currentImage);
  //           }

  //           await Transaction.findOneAndUpdate(
  //             {
  //               _id: id,
  //             },
  //             {
  //               name,
  //               category,
  //               nominals,
  //               thumbnail: filename,
  //             }
  //           );

  //           req.flash("alertMessage", "Berhasil ubah transaction");
  //           req.flash("alertStatus", "success");

  //           res.redirect("/transaction");
  //         } catch (err) {
  //           req.flash("alertMessage", `${err.message}`);
  //           req.flash("alertStatus", "danger");
  //           res.redirect("/transaction");
  //         }
  //       });
  //     } else {
  //       await Transaction.findOneAndUpdate(
  //         {
  //           _id: id,
  //         },
  //         {
  //           name,
  //           category,
  //           nominals,
  //         }
  //       );

  //       req.flash("alertMessage", "Berhasil ubah transaction");
  //       req.flash("alertStatus", "success");

  //       res.redirect("/transaction");
  //     }
  //   } catch (err) {
  //     req.flash("alertMessage", `${err.message}`);
  //     req.flash("alertStatus", "danger");
  //     res.redirect("/nominal");
  //   }
  // },

  // actionDelete: async (req, res) => {
  //   try {
  //     const { id } = req.params;

  //     await Transaction.findOneAndRemove({
  //       _id: id,
  //     });

  //     req.flash("alertMessage", "Berhasil hapus kategori");
  //     req.flash("alertStatus", "success");

  //     res.redirect("/transaction");
  //   } catch (err) {
  //     req.flash("alertMessage", `${err.message}`);
  //     req.flash("alertStatus", "danger");
  //     res.redirect("/transaction");
  //   }
  // },

  // actionStatus: async (req, res) => {
  //   try {
  //     const { id } = req.params;

  //     let transaction = await Transaction.findOne({_id : id})

  //     let status = transaction.status === 'Y' ? 'N' : 'Y';
  //     await Transaction.findOneAndUpdate({
  //       _id: id,
  //     }, {status});

  //     req.flash("alertMessage", "Berhasil hapus kategori");
  //     req.flash("alertStatus", "success");

  //     res.redirect("/transaction");
  //   } catch (err) {
  //     req.flash("alertMessage", `${err.message}`);
  //     req.flash("alertStatus", "danger");
  //     res.redirect("/transaction");
  //   }
  // },
};
