<?php

namespace StarFinder;

use Wikidata\Wikidata;

class Wiki
{
    protected $url;
    protected $wikiApi;
    protected $lang = "en";
    protected $entity, $property;
    public function __construct($urlOrId = "Q38111")
    {
        $this->url = $urlOrId;
        $this->wikiApi = new Wikidata();
    }

    protected function getQueryIdFromUrl()
    {
        preg_match('/(Q|P)\d+/i', $this->url, $matches);
        return $matches[0];
    }

    public  function getFullEntity()
    {
        if (!$this->entity) {
            $entity = $this->wikiApi->get($this->getQueryIdFromUrl($this->url), $this->lang);
            $this->entity = $entity;
        }
        return $this->entity;
    }

    public function getImdbPropery()
    {
        if (!$this->entity) {
            $this->getFullEntity();
        }

        if (!$this->property) {
            $property = $this->entity->properties->filter(function ($value, $key) {
                return $key == "P345";
            });
            $this->property = $property;
        }
        return $this->property;
    }
    public function getImdbIds()
    {
        if (!$this->entity) {
            $this->getFullEntity();
        }
        if (!$this->property) {
            $this->getImdbPropery();
        }
        return ($this->property->values()->first()->values->first()->id);
    }
}
