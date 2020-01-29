<?php

namespace {

    use App\ElementsResolver;
    use ATW\ElementalBase\Models\BaseElement;
    use SilverStripe\AssetAdmin\Forms\UploadField;
    use SilverStripe\Assets\Image;
    use SilverStripe\CMS\Model\SiteTree;
    use SilverStripe\Forms\DropdownField;
    use SilverStripe\Forms\TextareaField;
    use SilverStripe\Forms\TextField;
    use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
    use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;
    use SilverStripe\i18n\i18n;
    use SilverStripe\ORM\ArrayList;
    use SilverStripe\View\ArrayData;
    use Vanderlee\Syllable\Syllable;

    class Page extends SiteTree
    {
        private static $db = [
        ];

        private static $has_one = [
        ];

        private static $owns = [
        ];

        private static $extensions = [

        ];

        private static $headless_fields = [
            "ElementalArea.Elements" => "elements"
        ];

        function getParents($showHidden = false) {
            $page = $this;
            $parts = array();
            $i = 0;
            while ($page) {
                if ($showHidden || $page->ShowInMenus || ($page->ID == $this->ID)) {
                    $parts[] = $page;
                }
                $page = $page->Parent;
            }
            return array_reverse($parts);
        }

        public function PageBreadcrumbs() {
            $page = $this;
            $parents = $page->getParents();
            $breadcrumbs = new ArrayList();
            if(sizeof($parents) < 2)
                return $breadcrumbs;
            foreach($parents as $parent) {
                $breadcrumbs->push(new ArrayData([
                    "Title" => $parent->HyphenatedTitle(),
                    "Link" => $parent->isCurrent() ? null : $parent->Link(),
                ]));
            }
            return $breadcrumbs;
        }


        public function getCMSFields() {
            $fields = parent::getCMSFields();
            return $fields;
        }

        public function getElements() {
            return $this->ElementalArea()->Elements();
        }

        public function PreviewLink($action = null) {
            $link = $this->RelativeLink($action);
            $slash = substr($link, 0, 1) == "/" ? "" : "/";
            return "http://test-headless.atw.io$slash".$link;
            return "http://localhost:3000$slash".$link;
        }

//        public function provideGraphQLScaffolding(SchemaScaffolder $scaffolder)
//        {
//            $scaffolder
//                ->type(Page::class)
//                ->addAllFields()
//                    ->operation(SchemaScaffolder::READ)
//                    ->end()
//                ->nestedQuery(
//                    'Elements',  // the name of the field on the parent object
//                    new ElementsResolver(
//                        'read', // The name of the operation. Must be unique.
//                        'ATWBaseElement' // The type the query will return. Make sure it's been registered.
//                    )
//                )
//                ->end();
//
//            return $scaffolder;
//        }
//
    }
}
