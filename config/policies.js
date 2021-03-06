/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  // '*': 'is-logged-in',
  '*': true,
  // Bypass the `is-logged-in` policy for:
  // 'cliente/*': true,
  // 'movimento/*': true,
  // 'view-homepage-or-redirect': true,
  // 'graphBaseCt1': true,
  // 'graphBaseCt2': true,

};
