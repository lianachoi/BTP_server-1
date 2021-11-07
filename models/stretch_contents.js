const models = require("./index.js");

module.exports = (sequelize, DataTypes) => {
    const StretchContents = sequelize.define('StretchContents', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        valid: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        playTime: {
            type: DataTypes.STRING(4),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(400),
            allowNull: false
        }
    }, {
        // Other model options go here
        underscored: true,  // createdAt -> created_at (model to column name ONLY)
        tableName: 'stretch_contents'
    });

    StretchContents.associate = function (models) {
        StretchContents.belongsTo(models.StretchCategory);
    }

    return StretchContents;
}