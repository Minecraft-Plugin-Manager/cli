<h1 align="center">
  <a>
    <img
      src="https://user-images.githubusercontent.com/40847862/162650579-02d39e17-3f9b-4ccd-bdc1-8ebb84c4262d.png"
      alt="MPM" />
  </a>

Command line interpreter for MPM

</h1>

<div style="text-align: center !important;">

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Minecraft-Plugin-Manager_cli&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Minecraft-Plugin-Manager_cli)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

</div>

## **Usage**

```
mpm [command] [options] [--flags]
```

### **Commands**

```
  init
  install
  update
  remove
  list
  help
  version
```

### **Flags**

```
-h, --help
  Show this help message and exit.

-v, --version
  Show version and exit.
```

## **Examples**

### **Init**

`mpm init`

```
mpm init
```

### **Install**

`mpm install [plugin]`

```
mpm install WorldGuard
mpm install WorldGuard==1.2.3
```

### **Update**

`mpm update [plugin]`

```
mpm update WorldGuard
mpm update WorldGuard==4.5.6
```

### **Remove**

`mpm remove [plugin]`

```
mpm remove WorldGuard
```

### **List**

`mpm list`

```
mpm list
```

### **Help**

`mpm help [command]`

```
mpm help
mpm help install
mpm help remove
```

### **Version**

`mpm version`

```
mpm version
```

## **Contributing**

If you want to help contribute to this project, you will need to fork the repository and create a pull request.

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request)

## **License**

MPM is licensed under the [GPLv3 license](LICENSE).

## **Author**

-   [HandsomeRomanian, Owner & Developer](https://github.com/HandosomeRomanian)
-   [DeveloperAnonymous, Project Manager & Developer](https://github.com/DeveloperAnonymous)
-   [ArgNullException, Project Manager & Developer](https://github.com/ArgNullException)
