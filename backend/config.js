//
// config.js
//
// Web service configuration parameters, separate
// from our quizapp-config file that contains
// AWS-specific configuration information.
//

const config = {
  quizapp_config: "quizapp-config",
  quizapp_profile: "s3readwrite",
  service_port: 8080,
  page_size: 12,
};

module.exports = config;
