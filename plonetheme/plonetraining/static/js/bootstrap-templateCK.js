// Register a template definition set named "default".
CKEDITOR.addTemplates( 'default',
{
	// The name of the subfolder that contains the preview images of the templates.
	imagesPath : CKEDITOR.getUrl( CKEDITOR.plugins.getPath( 'templates' ) + 'templates/images/' ),
 
	// Template definitions.
	templates :
		[
			{
				title: 'My Template 1',
				image: 'template1.gif',
				description: 'Description of My Template 1.',
				html:
					'<h2>Template 1</h2>' +
					'<p><img src="/logo.png" style="float:left" />Type your text here.</p>'
			},
			{
				title: 'Template 1col (cadre)',
				html:
                    '<div class="row-fluid contentcol">' +
				    '<div class="span12 colonne"><h3>title col1</h3>col1</div>' +
                    '</div>'
			},
			{
				title: 'Template 3col',
				html:
					'<div class="row-fluid contentcol">' +
                    '<div class="span4 colonne"><h3>title col1</h3>col1</div>' +
                    '<div class="span4 colonne"><h3>title col2</h3>col2</div>' +
                    '<div class="span4 colonne"><h3>title col3</h3>col3</div>' +
                    '</div>'

			},
			{
				title: 'Template 2col',
				html:
                    '<div class="row-fluid contentcol">' +
				    '<div class="span6 colonne"><h3>title col1</h3>col1</div>' +
				    '<div class="span6 colonne"><h3>title col2</h3>col2</div>' +
                    '</div>'
			},
			{
				title: 'Template 2col 1/3-2/3',
				html:
                    '<div class="row-fluid contentcol">' +
				    '<div class="span4 colonne"><h3>title col1</h3>col1</div>' +
				    '<div class="span8 colonne"><h3>title col2</h3>col2</div>' +
                    '</div>'
			},
			{
				title: 'Template 2col 2/3-1/3',
				html:
                    '<div class="row-fluid contentcol">' +
				    '<div class="span8 colonne"><h3>title col1</h3>col1</div>' +
				    '<div class="span4 colonne"><h3>title col2</h3>col2</div>' +
                    '</div>'
			}
		]
});