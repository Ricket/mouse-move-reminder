mouse-move-reminder
===

When RuneScape is running and you haven't moved your mouse for nearly 5 minutes, play an annoying sound.

This is written in node.js, uses electron and a global mouse listener library. But it broke and I had trouble debugging the issue in the input hook library, which also hasn't had updates in a long while and needs older versions of node and electron. So I looked for a different input hook library, and found another one that was just a JS wrapper around a Python library. Seeing that, plus the fact that I always felt Electron was overkill for this little script, I just decided to rewrite the whole script in Python.

Get the Python version over here: https://github.com/Ricket/mouse-move-reminder-python
