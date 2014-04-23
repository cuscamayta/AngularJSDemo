app.filter('filterByWords', function () {
    return function (array, substr, ignoredFields) {
        if (!angular.isArray(array) || typeof substr == "undefined" || substr === "")
            return array;

        function containsWord(text, word) {
            return text.toUpperCase().indexOf(word.toUpperCase()) >= 0;
        }

        function isNotAnIgnoredField(field) {
            return jQuery.inArray(field, ignoredFields) < 0;
        }

        function matches(theObject) {
            var remaining = words.length;
            if (remaining == 0)
                return true;
            var theWords = angular.copy(words);
            for (var field in theObject)
                if (isNotAnIgnoredField(field))
                    for (var position = 0; position < remaining;)
                        if (!containsWord("" + theObject[field], theWords[position]))
                            position++;
                        else {
                            theWords.splice(position, 1);
                            remaining--;
                            if (remaining == 0)
                                return true;
                        }
            return false;
        }

        if (typeof substr != "string")
            substr = typeof substr == "number" ? "" + substr : "";
        if ((typeof ignoredFields != "string") ||
                (ignoredFields = ignoredFields.trim().split(/[ ,]+/),
                    ignoredFields.length == 1 && !ignoredFields[0]))
            ignoredFields = ["$$hashKey"];
        else
            ignoredFields.push("$$hashKey");
        var result = [],
            words = substr.trim().split(/ +/);
        if (words.length == 1 && !words[0])
            return array;
        for (var index = 0, limit = array.length; index < limit; index++)
            if (matches(array[index]))
                result.push(array[index]);
        return result;
    };
});