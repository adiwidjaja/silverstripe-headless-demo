<?php

namespace App\GraphQL;

use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use SilverStripe\GraphQL\TypeCreator;
use SilverStripe\GraphQL\Pagination\Connection;


class PageTypeCreator extends TypeCreator
{
    public function attributes()
    {
        return [
            'name' => 'Page'
        ];
    }

    public function fields()
    {
        $elementConnection = Connection::create('Elements')
            ->setConnectionType($this->manager->getType('Element'));

        return [
            'ID' => ['type' => Type::nonNull(Type::id())],
            'ClassName' => ['type' => Type::string()],
            'Title' => ['type' => Type::string()],
            'ParentID' => ['type' => Type::int()],
            'Content' => ['type' => Type::string()],
            'RedirectionType' => ['type' => Type::string()],
            "Elements" => [
                'type' => $elementConnection->toType(),
                'args' => $elementConnection->args(),
                'resolve' => function($object, array $args, $context, ResolveInfo $info) use ($elementConnection) {
                    return $elementConnection->resolveList(
                        $object->ElementalArea()->Elements(),
                        $args,
                        $context
                    );
                }
            ],
        ];
    }
}
