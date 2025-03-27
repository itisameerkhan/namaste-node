## ⭐ 1. Installation of Node in AWS

```cmd
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 22

# Verify the Node.js version:
node -v # Should print "v22.14.0".
nvm current # Should print "v22.14.0".

# Verify npm version:
npm -v # Should print "10.9.2".
```


## ⭐ 2. Git clone project 

```cmd
git clone https://github.com/itisameerkhan/dev-tinder-frontend.git

git clone https://github.com/itisameerkhan/dev-tinder-backend.git
```


## ⭐ 3. Build out frontend project 

```cmd
npm run build
```

## ⭐ 4. Install nginx 

```cmd
sudo apt update 

sudo apt install nginx 

sudo systemctl start nginx

sudo systemctl enable nginx
```

## ⭐ 5. copy code from dist folder to (`/var/www/html/`)

```cmd
cd dev-tinder-frontend

sudo scp -r dist/* /var/www/html/
```