// Register a template definition set named "default".
CKEDITOR.addTemplates( 'default',
{
	// The name of the subfolder that contains the preview images of the templates.
	imagesPath : CKEDITOR.getUrl( CKEDITOR.plugins.getPath( 'templates' ) + 'templates/images/' ),
 
	// Template definitions.
	templates :
		[
			{
				title: 'Template 1 colonne',
				image: '++theme++plonetheme.plonetraining/images/templateCk11.gif',
				html:
                    '<div class="row-fluid contentcol">' +
				    '<div class="span12 colonne"><h3>title col1</h3>col1</div>' +
                    '</div>'
			},
			{
				title: 'Template 3 colonnes',
				image: '++theme++plonetheme.plonetraining/images/template3col.gif',
				html:
					'<div class="row-fluid contentcol">' +
                    '<div class="span4 colonne"><h3>title col1</h3>col1</div>' +
                    '<div class="span4 colonne"><h3>title col2</h3>col2</div>' +
                    '<div class="span4 colonne"><h3>title col3</h3>col3</div>' +
                    '</div>'

			},
			{
				title: 'Template 2 colonnes',
				image: '++theme++plonetheme.plonetraining/images/template12.gif',
				html:
                    '<div class="row-fluid contentcol">' +
				    '<div class="span6 colonne"><h3>title col1</h3>col1</div>' +
				    '<div class="span6 colonne"><h3>title col2</h3>col2</div>' +
                    '</div>'
			},
			{
				title: 'Template 2 colonnes 1/3-2/3',
				image: '++theme++plonetheme.plonetraining/images/template13-23.gif',
				html:
                    '<div class="row-fluid contentcol">' +
				    '<div class="span4 colonne"><h3>title col1</h3>col1</div>' +
				    '<div class="span8 colonne"><h3>title col2</h3>col2</div>' +
                    '</div>'
			},
			{
				title: 'Template 2 colonnes 2/3-1/3',
				image: '++theme++plonetheme.plonetraining/images/template23-13.gif',
				html:
                    '<div class="row-fluid contentcol">' +
				    '<div class="span8 colonne"><h3>title col1</h3>col1</div>' +
				    '<div class="span4 colonne"><h3>title col2</h3>col2</div>' +
                    '</div>'
			}
		]
});