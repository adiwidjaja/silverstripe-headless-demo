<?php

namespace App\GraphQL;

use ATW\ElementalBase\Models\BaseElement;
use GraphQL\Type\Definition\Type;
use SilverStripe\Core\ClassInfo;
use SilverStripe\GraphQL\TypeCreator;
use SilverStripe\GraphQL\Pagination\Connection;
use SilverStripe\ORM\DataObject;

class ElementTypeCreator extends TypeCreator
{
    public function attributes()
    {
        return [
            'name' => 'Element'
        ];
    }

    public function fields()
    {
        $fields = [
            'ID' => ['type' => Type::nonNull(Type::id())],
            'ClassName' => ['type' => Type::string()],
            'Title' => ['type' => Type::string()],
        ];

        $schema = DataObject::getSchema();
        $omitted = ['id', 'created', 'lastEdited', 'className'];

        $classes = ClassInfo::subclassesFor(BaseElement::class);
        foreach($classes as $class) {
            $fields = $schema->databaseFields($class);

            print_r($fields);die();
        }

        return $fields;
    }

}
