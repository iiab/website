Contributing
############

We welcome your help in making our project a success. Installing Internet-in-a-Box and reporting issues is a good way to start
contributing. You can get Internet-in-a-Box images from our `download page.<http://download.iiab.io/>`__

The project needs contributors with diverse range of skills. Look through our `GitHub issues <https://github.com/iiab/iiab/issues>`_
and find a task that fits your skills:

* Coding
* Data curation
* Documentation
* Graphic design
* Testing
* Translation
* Usability design

Getting started
===============
Internet-in-a-Box runs on various GNU/Linux operating systems such as Fedora, Ubuntu, Debian, CentOS and Raspbian.

You can install Internet-in-a-Box on most late model desktop and laptop computers. It also supports Intel NUC, Intel
Gigabyte BRIX, OLPC XO-1.5, XO-1.75, XO-4, Raspberry Pi 2 and Raspberry Pi 3. VirtualBox VM could be also used
for testing purposes. Using Docker containers however is not recommended as our Ansible provisioning system requires
low-level access to the operating system.

  Please refer to `platforms <https://github.com/iiab/iiab/wiki/IIAB-Platforms>`__ page for more information.

Internet-in-a-Box uses `Ansible <https://www.ansible.com/>`__ infrastructure automation tool to deploy and configure
all software packages. Ansible uses `Playbooks <http://docs.ansible.com/ansible/latest/playbooks.html>`__ a human readable
instruction files in YAML format. The Playbooks are divided into hosts, roles and tasks.

At runtime, Ansible gathers all the system information and stores them as 'facts' and then it uses predefined 'variables'
to make change to the installation process.

  Please refer to `architecture <https://github.com/iiab/iiab/wiki/IIAB-Architecture>`__ and `variables <https://github.com/iiab/iiab/wiki/IIAB-Variables>`__ page for more information.

Installation
============

Before you start the installation please refer to the `hardware section of FAQ <http://wiki.laptop.org/go/IIAB/FAQ#What_hardware_should_I_use.3F>`__ page for
memory, storage and network requirements for your platform. Also note that downloading content might take a long time on slower Internet
connections.

If you are a developer, please consider `building Internet-in-a-Box from scratch. <https://github.com/iiab/iiab/wiki/IIAB-Installation#do-everything-from-scratch>`__

  Please refer to `Installation <https://github.com/iiab/iiab/wiki/IIAB-Installation>`__ page for more information.

Debugging
=========

Here are few strategies for debugging problems during the Internet-in-a-Box installation.

* When a installation task fails, Ansible prints out a descriptive error message to the screen. This error information is also written to 'ansible.log' file.
* Search through the Ansible Playbooks using 'egrep' command-line tool with error information to find the failed task.
* You can add additional `debug print statements <http://docs.ansible.com/ansible/latest/debug_module.html>`__ to Ansible Playbooks for debugging the problem.
* Talk to us or report a bug using the information below.

 Please refer to `Ansible Playbook documentation <http://docs.ansible.com/ansible/latest/playbooks.html>`__ for more information.

Reporting Bugs
==============

You can file bug reports on `Github <https://github.com/>`__.

* Sign up for a `Github <https://github.com/>`__ account
* Go to the `issue tracker on GitHub <https://github.com/iiab/iiab/issues>`__
* Search for existing issues using the search field.
* If you don't find any similar issues. File a new issue.

Please consider providing a descriptive title, your operating system information, error messages and steps to reproduce the issue.

Get in touch
============

* Join our `mailing list <http://lists.laptop.org/listinfo/server-devel>`_
* Join us on IRC: `#schoolserver <https://webchat.freenode.net/?channels=#schoolserver>`_ on `freenode <https://www.freenode.net/>`_
