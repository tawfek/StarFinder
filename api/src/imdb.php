<?php

namespace StarFinder;

class imdb
{

    public $id, $config;
    protected $person;
    protected $movies = [];
    public function __construct($url, $language = "en-US,en", $EnableCache = true, $cacheDir = "cache")
    {
        $this->id = $this->getImdbIdFromUrl($url);
        $this->config = new \Imdb\Config();
        $this->EnableCache($EnableCache, $cacheDir);
        $this->setLanguage($language);
        $this->getPerson($this->getId());
    }
    public function getImdbIdFromUrl($url)
    {
        preg_match_all("/ev\d{7}\/\d{4}(-\d)?|(nm)\d{7}/", $url, $matched);;
        return $matched;
    }

    public function getId()
    {
        return $this->id[0][0] ?? false;
    }

    public function setLanguage($language = "en-US,en")
    {
        $this->config->language = $language;
    }

    public function EnableCache($enable, $dir)
    {
        $this->config->usecache = $enable;
        $this->config->cachedir = $dir;
    }

    public function getPerson($id)
    {
        try {
            $person = new \Imdb\Person($id, $this->config);
            $this->setPerson($person);
            return $person;
        } catch (\Exception $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function setPerson($person)
    {
        $this->person = $person;
    }

    public function getAvatar()
    {
        if ($this->person !== null) {
            return $this->person->photo() ?? "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/name-2135195744._CB470041852_.png";
        }
        return false;
    }

    public function getRealName()
    {
        if ($this->person !== null) {
            return $this->person->birthname();
        }
        return false;
    }

    public function getFullBirthday(): array
    {
        if ($this->person !== null) {

            return $this->person->born();
        }
        return [];
    }

    public function getBirthdayAsString(): string
    {
        $birthday = $this->getFullBirthday();
        if (count($birthday) > 0) {
            return $birthday["year"] . "/" . $birthday["month"] . "/" . $birthday["day"];
        }
        return '';
    }

    public function getImdbUrl()
    {
        if ($this->person !== null) {
            return $this->person->main_url();
        }
        return false;
    }

    public function getPersonMovies()
    {
        if (empty($this->movies) && $this->person !== null) {
            $movies = $this->person->movies_actor();
            $this->movies = $movies;
            return $movies;
        }
        return $this->movies;
    }

    public function getPersonPlace(): string
    {
        if (count($this->getFullBirthday()) > 0) {
            return $this->getFullBirthday()['place'];
        }
        return '';
    }

    public function getPersonInformation()
    {
        return [
            "name" => $this->getRealName(),
            "avatar" => $this->getAvatar(),
            "birthday" => $this->getBirthdayAsString(),
            "birth_place" => $this->getPersonPlace(),
            "imdb_url" => $this->getImdbUrl(),
        ];
    }

    public function getPersonFullInformation(): array
    {
        return [
            "name" => $this->getRealName(),
            "avatar" => $this->getAvatar(),
            "birthday" => $this->getBirthdayAsString(),
            "birth_place" => $this->getPersonPlace(),
            "imdb_url" => $this->getImdbUrl(),
            "movies" => $this->getPersonMovies(),
            "movies_count" => count($this->getPersonMovies() ?? []),
        ];
    }
}
