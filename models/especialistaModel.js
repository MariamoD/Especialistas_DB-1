module.exports = (sequelize, DataTypes) => {

    const Especialista = sequelize.define("especialista", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cargo: {
            type: DataTypes.STRING,
        },
        departamento: {
            type: DataTypes.STRING,
        },
        especialidade: {
            type: DataTypes.STRING,
        },
        formacao: {
            type: DataTypes.STRING,
        },
        experiencia: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        telefone: {
            type: DataTypes.INTEGER,
        },
    })
    
    return Especialista

}