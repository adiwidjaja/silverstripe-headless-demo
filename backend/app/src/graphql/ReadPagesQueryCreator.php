<?php

namespace App\GraphQL;

use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Page;
use SilverStripe\GraphQL\OperationResolver;
use SilverStripe\GraphQL\QueryCreator;

class ReadPagesQueryCreator extends QueryCreator implements OperationResolver
{
    public function attributes()
    {
        return [
            'name' => 'readPages'
        ];
    }

    public function args()
    {
        return [
//            'Email' => ['type' => Type::string()]
        ];
    }

    public function type()
    {
        return Type::listOf($this->manager->getType('Page'));
    }

    public function resolve($object, array $args, $context, ResolveInfo $info)
    {
        $list = Page::get();

        // Optional filtering by properties
//        if (isset($args['Email'])) {
//            $list = $list->filter('Email', $args['Email']);
//        }

        return $list;
    }
}
