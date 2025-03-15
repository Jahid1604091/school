module.exports = {
    apps: [
      {
        name: 'stam-front',
        script: 'npm',
        args: 'start', // Runs "npm start"
        instances: 'max', // Uses all available CPU cores
        exec_mode: 'cluster',
        autorestart: true,
        watch: false,
        instance_var: 'INSTANCE_ID',
        max_memory_restart: '2G',
        merge_logs: true,
      }
    ]
  };
  