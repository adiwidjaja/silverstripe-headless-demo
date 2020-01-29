<?php

use DNADesign\Elemental\Models\BaseElement;
use SilverStripe\Assets\Image;

class FaqElement extends BaseElement {
    private static $db = [
        "Description" => "HTMLText",
        "Text" => "HTMLText",
    ];

    private static $has_one = [
        "Image" => Image::class,
    ];

    private static $owns = [
        "Image"
    ];

    private static $headless_fields = [
        "Title" => "title",
        "Description" => "description",
        "Text" => "text",
        "Thumbnail" => "thumbnail",
    ];

    private static $table_name = 'FaqElement';

    public function getType()
    {
        return _t(__CLASS__ . '.BlockType', 'FaqElement');
    }

    public function getThumbnail() {
        if($image = $this->Image()) {
            return $image->Fit(200,200);
        }
    }
}
