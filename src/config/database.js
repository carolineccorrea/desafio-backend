module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'usersdb',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
