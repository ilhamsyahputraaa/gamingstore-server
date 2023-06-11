const Player = require("../player/model");
const Voucher = require("../voucher/model");
const bcrypt = require("bcryptjs");

module.exports = {
  landingPage: async (req, res) => {
    try {
      const voucher = await Voucher.find()
        .select("__id name status category thumbnail")
        .populate("category");

      res.status(200).json({ data: voucher });
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message || `Terjadi kesalahan pada server` });
    }
  },
  
  detailPage: async (req, res) => {
    try {
      const { id } = req.params;
      const voucher = await Voucher.findOne({ _id: id })
        .populate("category")
        .populate("nominals")
        .populate("user", "_id name phoneNumber")
      
      if (!voucher) {
        return res.status(400).json({ message : "Voucher Tidak Ditemukan" })
      }

      res.status(200).json({ data: voucher });
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message || `Terjadi kesalahan pada server` });
    }
  },
};
