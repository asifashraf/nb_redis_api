#!/bin/bash
action=$1
if [[ -z "$action" || "$action" == "--help" ]]; then
  echo "====== Notebull RUST API ======"
  echo "[] GIT:         commit, status, push"
  echo "[]:  SERVER     start"
  echo "==============================================================="
else
 case $action in

  "commit")
        source cd-nra.sh
        git add .
        git commit -m "$1"
    ;;

    "push")
        source cd-nra.sh
        git add .
        git commit -m "$1"
        git push
    ;;

  "status")
        source cd-nra.sh
        git status
    ;;


## cd poc/create-tauri-app-command
    "start")
        source cd-nra.sh
        node src/start.js
    ;;


  *)
    # Handle unknown or missing arguments
    echo "Invalid or missing argument. Please specify a valid action or use --help for usage information."
    ;;

 esac
fi
