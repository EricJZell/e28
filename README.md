# e28
Course work for DGMD E-28

* To ssh to the digital ocean droplet: `$ ssh root@#{ip_address}`
* To update the virtual hosts file: `$ nano /etc/apache2/sites-enabled/000-default.conf`
* To restart the apache server on digital ocean: `systemctl restart apache2`
* To update API CORS stuff, edit: `e28-api/core/.env`
* Run `$ bash setup` in the `/var/www/html/e28/e28-api` directory to re-setup the api stuff
* 
