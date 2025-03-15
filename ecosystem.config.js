module.exports = {
    apps: [
      {
        name: 'stam-front',
        script: './dist/index.js',
        args: 'one two',
        instances: -1,
        exec_mode: 'cluster',
        autorestart: true,
        watch: false,
        instance_var: 'INSTANCE_ID',
        max_memory_restart: '2G',
        merge_logs: true
      }
    ]
  };
  