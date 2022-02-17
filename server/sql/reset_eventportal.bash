#!/usr/bin/env bash
#
# Recreate and reset the database to be as after part I.
#
echo ">>> Recreate the database (as root)"
mysql -uroot -p < setup.sql > /dev/null

file="ddl_tables.sql"
echo ">>> Creates the tables from ($file)"
mysql -ueventportalmaster -pteamkingshit eventportalen < $file > /dev/null

file="ddl_procedures.sql"
echo ">>> Creates the procedures from ($file)"
mysql -ueventportalmaster -pteamkingshit eventportalen < $file > /dev/null

file="insert.sql"
echo ">>> Inserts into all the tables using the file '($file)'"
mysql -ueventportalmaster -pteamkingshit < $file > /dev/null