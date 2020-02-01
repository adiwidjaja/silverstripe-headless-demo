<?php

namespace App\Elements;

use DNADesign\Elemental\Models\BaseElement;
use SilverStripe\Assets\Image;
use SilverStripe\ORM\FieldType\DBField;

class FaqElement extends BaseElement {
    private static $db = [
        "ShortText" => "HTMLText",
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
        "ShortText" => "description",
        "Text" => "text",
        "getThumbnail" => "thumbnail",
    ];

    private static $table_name = 'FaqElement';

    public function getType()
    {
        return _t(__CLASS__ . '.BlockType', 'FaqElement');
    }

    public function getThumbnail() {
	if($image = $this->Image()) {
	    if($image->exists())
                return $image->Fit(200,200)->getAbsoluteURL();
        }
    }

    // Does not work
//    public function getEditorPreview()
//    {
//        return DBField::create_field('HTMLText', $this->ShortText)->Summary(20);
//    }
}
