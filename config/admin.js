module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '218c33adacf88056ee2e4a3682acacc2'),
  },
});
