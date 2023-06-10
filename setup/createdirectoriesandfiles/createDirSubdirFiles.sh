#Create directories, sub directories, and files for our web app 
sudo -s mkdir -p app/{config,features/{addjoke,jokelist},views} && touch "app/index.js" "app/apiserver.js" "app/config/dbinfo.js" "app/views/index.html" "app/features/addjoke/addjoke.html" "app/features/addjoke/addjoke.js" "app/features/jokelist/jokelist.html" "app/features/jokelist/jokelist.js"
