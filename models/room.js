const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
    {
        // =========================
        // BASIC INFORMATION
        // =========================

        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },

        roomType: {
            type: String,
            enum: [
                "single",
                "double",
                "triple",
                "pg",
                "1bhk",
                "2bhk",
            ],
            required: true,
        },

        furnishing: {
            type: String,
            enum: [
                "fully-furnished",
                "semi-furnished",
                "unfurnished",
            ],
            required: true,
        },

        location: {
            type: String,
            required: true,
            trim: true,
        },

        city: {
            type: String,
            required: true,
            trim: true,
        },

        landmark: {
            type: String,
            trim: true,
        },

        // =========================
        // RENT INFORMATION
        // =========================

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        securityDeposit: {
            type: Number,
            min: 0,
            default: 0,
        },

        availableFrom: {
            type: Date,
            required: true,
        },

        // =========================
        // DESCRIPTION
        // =========================

        description: {
            type: String,
            required: true,
            maxlength: 500,
            trim: true,
        },

        // =========================
        // ROOM PHOTOS
        // =========================

        photos: [
            {
                url: {
                    type: String,
                    required: true,
                },

                filename: {
                    type: String,
                },
            },
        ],

        // =========================
        // FACILITIES
        // =========================

        facilities: [
            {
                type: String,
            },
        ],

        otherFacility: {
            type: String,
            trim: true,
        },

        // =========================
        // HOUSE RULES
        // =========================

        rules: [
            {
                type: String,
            },
        ],

        otherRule: {
            type: String,
            trim: true,
        },

        // =========================
        // OWNER
        // =========================

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            // required: true,
        },

        // =========================
        // LISTING STATUS
        // =========================

        status: {
            type: String,
            enum: [
                "pending",
                "approved",
                "rejected",
            ],
            default: "pending",
        },
    },

    {
        timestamps: true,
    }
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;