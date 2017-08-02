module.exports = function(sequelize, DataTypes) {
    var Asset = sequelize.define("Asset", {

        itemName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        category: {
            type: DataTypes.STRING,
            allowNull: false
        },

        make: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3]
            },
        },

        model: {
            type: DataTypes.TEXT, 
        },

        serial_num: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            },   
        },

        bought: {
            type: DataTypes.STRING,
            allowNull: false,
            isDate: true, 
            
        },

        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            isDecimal: true,

        },

        info: {
            type: DataTypes.TEXT,
        },

        inherit: {
            type: DataTypes.STRING,
        },

        image: {
            type: DataTypes.STRING,
        }
    });
    return Asset;

    // return Asset.create({
    //     itemName:'tv', 
    //     category: 'Electronics', 
    //     make: 'Vizio', 
    //     model:'abc123', 
    //     serial_num: 'ab125678', 
    //     bought: '2017-2-4', 
    //     price:'450', 
    //     info:'none'
    // });
};
