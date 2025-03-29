# Nginx & Backend Node App Deployment

## ⭐ 1. PM2 installation

```cmd
npm install pm2 -g
```

## ⭐ 2. starting pm2

```cmd
pm2 start npm -- start
```

### ⚡ pm2 commands

```cmd
pm2 flush <name>

pm2 list

pm2 log

pm2 delete <name>

pm2 stop <name>
```

### ⚡ pm2 custom names

```cmd
pm2 start npm --name "something" -- start
```

## ⭐ 3. configuring nginx proxy pass

```cmd
sudo nano /etc/nginx/sites-available/default
```

### change the server name to ip address

![demo](../assests/demo15.png)

### proxy pass

```cmd
location /api/ {
        proxy_pass http://localhost:7777/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```

![demo](../assests/demo16.png)

## ⭐ 4. Restart nginx

```cmd
sudo systemctl restart nginx
```
