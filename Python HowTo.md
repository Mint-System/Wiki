# Python HowTo

## Manage multiple python versions

You can install multiple python version like tihs:

```bash
sudo apt update
sudo apt install python3.7
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.6 1
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.7 2
```