---
title: Vim
section: foundations
---

# Vim

## Introduction

[Vim](http://www.vim.org/) is a command-line text editor, created by [Bram Moolenar](http://www.moolenaar.net/). It stands for _Vi-IMproved_; _Vi_ was an older ubiquitous editor, which was enhanced to create Vim.

### Why Vim?

Vim is all about efficiency. And there’s a couple of angles from which it approaches efficiency.

Core to Vim’s belief is that most people spend more time editing existing text than writing new text. This is especially true for software engineers who are often tasked with enhancing and maintaining existing code.

Vim allows you to be efficient by forcing you to only use the keyboard and then giving you the ability to use existing keyboard shortcuts as well as customize and create new ones for completing repetitive tasks quickly.

Finally, whether you’re using a Mac, Windows, or some Linux distribution, Vim’s got you covered. In particular, if your day to day work involves working in the ssh’ed terminal sessions, Vim is your best friend. A popular alternative is [emacs](https://www.gnu.org/software/emacs/).

On the cluster, use VIM to edit the files on the [edge node](/en/docs/onboarding/ssh/) we provide. You do not need to become a VIM power user but as an IT engineer or someone who wants to be comfortable with IT tooling and concepts, knowing the basics of VIM will bring you a lot of comfort. For example, when you wish to change a configuration file or edit a script, it is much faster to open the file in VIM locally than download, edit and upload the same file over SFTP.

### Which Vim?

There are two kinds of Vim available -- one that runs in your terminal emulator, and another that runs as an independent graphical application. The terminal one comes by default on most operating systems. However, it might not be the latest one.

* On _Linux_ systems, you can install `vim-enhanced` to get the recent terminal-vim using your favorite package manager. The package to install the graphical-vim (gvim) is `vim-gnome` (Debian/Ubuntu) and `vim-X11` (Fedora).

* `neovim` is a project that seeks to aggressively refactor `vim` source code in order to achieve the following goals: Simplify maintenance to improve the speed that bug fixes and features get merged.

* On macOS, you can install `vim` using HomeBrew to get the recent terminal-vim. The package to install the graphical-vim (MacVim) is `macvim`.

### Installation

Vim is available for many different systems and there are several versions.

#### From source

The best way to install Vim on Unix is to use the sources. This requires a compiler and its support files. Compiling Vim isn't difficult at all. You can simply type "make install" when you are happy with the default features.

```
git clone https://github.com/vim/vim.git
cd vim/src
make
```

#### Windows

For modern MS-Windows systems you can simply use the executable installer:

[gvim82.exe](https://ftp.nluug.nl/pub/vim/pc/gvim82.exe)

### First steps

To open Vim, just type `vim` at the command-prompt.

![Vim editor](assets/vi-vim-editor.png)

To open a file in the beginning, type `vim /etc/hosts` at the command-prompt.

The Vim process is now running in the terminal. You should see a text file that associates IP addresses with hostnames.

![Vim /etc/hosts](assets/vim-hosts-file.png)

Press `i`. You are now in _Insert_ mode. You should see `--INSERT--` prompted somewhere on your screen. In this mode, you can write, edit and delete text as if you were using any other text editor.

![Vim insert](assets/vim-insert.png)

Press `Esc`. You are now back in _Normal_ mode. In this mode, you can use all of the commands described thereunder. This is the main mode to edit text.

You might ask yourself: why do I need _Normal_ mode if I can edit text in _Insert_ mode? The idea behind _Normal_ mode is that text editing is done much faster and more efficiently. For instance, to delete a line, press `dd`. In _Insert_ mode, you whould have to select the entire line and delete it. As mentioned before, Vim is all about efficiency.

If you are done, press `:wq` to save the file and quit Vim.

## Different modes

Vim is a _modal_ text-editor. It has different modes to perform different tasks. The major ones are:

* Normal (N) -- edit text
* Insert (I) -- type text
* Command-line (C) -- execute commands

## Moving around

In contrast to regular text editor, you use keys `h`, `j`, `k`, and `l` which will respectively move the cursor left, down, up and right.

It is also possible to use the arrow keys.

## Basic commands

Once typing is over, we can _save_ the text by typing `w` in _Command-line_ mode and pressing `Enter` (CR or carriage-return):

```
:w
```

To _quit_ vim, type either `q` in command-line mode:

```
:q
```

If you try to quit vim when some contents in the open file are _unsaved_, vim will throw an error. In such a case, either write `:q!` to quit without saving the changes, or first save (using `:w`) then quit.

## Advanced commands

Here are some of the _editing_ commands:

* `a`: around, append; `A`: append at the end of line
* `b`: beginning of word
* `c`: change (delete and switch to insert mode); `C`: change till the end of line
* `d`: delete; `D`: delete till the end of line
* `e`: end of current word
* `f`: find in current line
* `h`: alias to left arrow
* `i`: inside, switch to insert mode; `I`: insert at the beginning of line
* `j`: alias to down arrow
* `k`: alias to up arrow
* `l`: alias to right arrow
* `n`: next search item; `N`: `n` in reverse order
* `o`: open a new line below current line; `O`: open a new line above current line
* `p`: paste after the cursor position; `P`: paste before the cursor position
* `r`: replace current character; `R`: switch to replace mode
* `t`: till
* `u`: undo (`<C-r>` is for redo)
* `v`: visual mode; `V`: visual-line mode; `<C-v>`: visual-block mode
* `w`: next word
* `x`: cut
* `y`: yank (copy)

Some of the commands have a _two-letter_ combination:

* `dd` deletes the current line
* `cc` changes the current line
* `yy` copies the current line

## Visual-mode

Vim offers a _visual_ mode to visually select regions of text, before applying a normal-mode command. For example,

* `vw` followed by `y` selects till next word and copies selection.
* `vt"` followed by `d` selects till next _"_ and deletes the selection.

There is also a convenience `visual-line` mode that lets you select line-by-line. For example,

* `V` (capital `V`) followed by `y` selects the current line and copies it.
* `V` followed by `2j` followed by `d` selects the current and the next two lines, and deletes them.

Further, there is a _visual-block_ mode (triggered using `<C-v>`) that lets select text vertically. This is very helpful for deleting say a column in a table. Just select the column visually and press `d`.

## Search

Vim provides an easy way to search content in the current buffer. Type the following in normal mode:

```
/searchterm	    " search forwards
?searchterm	    " search backwards
*	                " search current word forwards
#	                " search current word backwards
```

After searching something, jump to the next and previous occurrences of the search-term using `n` and `N`, respectively.

### Search and replace

Vim also provides a sophisticated mechanism to **replace** occurrences of a word in the current buffer:

```
:%s/oldword/newword/c	" replace one-by-one
:%s/oldword/newword/g	" replace all occurrences at once
```

## Additional information

* [Learn VIM while playing a game](https://vim-adventures.com/)
* [Interactive tu web UI](https://www.openvim.com/)
* [Calculator in Vim – The Expression register](https://jovicailic.org/2020/04/calculator-in-vim/)
