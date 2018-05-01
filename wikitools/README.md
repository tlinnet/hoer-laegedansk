# Setup of wiki notes

## .htaccess files for short URL base path

In folder **main** 

```text
#AuthType Basic
#AuthName "Hør lægedansk - mens du læser!"
#AuthUserFile  /home/www/wiki.hoer-laegedansk.dk/.htpasswd
#Require valid-user

RewriteEngine On
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} !-f
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} !-d
RewriteRule ^(.*)$ %{DOCUMENT_ROOT}/index.php [L]

RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} !-f
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} !-d
RewriteRule ^/?images/thumb/[0-9a-f]/[0-9a-f][0-9a-f]/([^/]+)/([0-9]+)px-.*$ %{DOCUMENT_ROOT}/thumb.php?f=$1&width=$2 [L,QSA,B]

RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} !-f
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} !-d
RewriteRule ^/?images/thumb/archive/[0-9a-f]/[0-9a-f][0-9a-f]/([^/]+)/([0-9]+)px-.*$ %{DOCUMENT_ROOT}/thumb.php?f=$1&width=$2&archived=1 [L,QSA,B]
```

In folder **main/images** 

```text
# Protect against bug T30235
<IfModule rewrite_module>
	RewriteEngine On
	RewriteOptions inherit
	RewriteCond %{QUERY_STRING} \.[^\\/:*?\x22<>|%]+(#|\?|$) [nocase]
	RewriteRule . - [forbidden]
	# Fix for bug T64289
	# Options +FollowSymLinks
</IfModule>
```

In LocalSettings.php

```php
$wgScriptPath = "";
$wgArticlePath = "/$1";
$wgUsePathInfo = true;
```

## Allow API

In LocalSettings.php

```php
# https://www.mediawiki.org/wiki/API:Edit
# https://www.mediawiki.org/wiki/Manual:Configuration_settings#API
$wgEnableAPI = true;
$wgEnableWriteAPI = true;
```


## Allow more media types

In LocalSettings.php

```php
# Add several file types to the default array
# Normal allowed: png, gif, jpg, jpeg, webp.
$wgFileExtensions = array_merge(
    $wgFileExtensions, array(
        'pdf', 'mp3'
        )
    );
```

## Sound on wiki without template

* https://www.mediawiki.org/wiki/Extension:Html5mediator
* https://github.com/lightbinder/Html5mediator/releases