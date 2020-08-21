output=~/test

mkdir -p "$output/assets"
cp -R assets/ "$output/assets" 
for filename in *.md; do
    newfilename=$(basename "$filename" .md).html
    echo "Convert $filename to $newfilename"
    pandoc -f markdown -t html5 -o "$output/$newfilename" "$filename" -c "assets/style.css" -s --toc -A "$output/assets/footer.html"
done

selector="$output/*.html"

echo "replace image links"
#sed -i -E 's;!\[\[\([^]]*\)\]\];<img src="\1" \/>;g' $selector

echo "replace wiki links with alt text"
sed -i -E 's;\[\[\([^|]*\)|\([^]]*\)\]\];<a href="\1\.html">\2</a>;g' $selector

echo "replace default wiki links"
sed -i -E 's;\[\[\([^]]*\)\]\];<a href="\1\.html">\1</a>;g' $selector 
