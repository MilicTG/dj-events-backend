module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd3527490e738da7087090e09d64dc3c1'),
  },
});
