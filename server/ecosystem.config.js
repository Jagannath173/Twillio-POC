module.exports = {
    apps: [{
        name: "AI Assitant",
        script: "sc/server.js",
        instances: "max",
        exec_mode: "cluster",
        env: {
            NODE_ENV: "development"
        },
        env_production: {
            NODE_ENV: "production"
        }
    }],
    deploy: {
        production: {
            user: "ubuntu",
            host: "13.60.36.169",
            ref: "origin/main",
            repo: "https://github.com/Jagannath173/twilliopoc",
            path: "/var/www/twilio-backend",
            "post-deploy":
                "npm install && pm2 reload ecosystem.config.js --env production",

        }
    }
};