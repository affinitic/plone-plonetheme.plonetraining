from Products.CMFCore.utils import getToolByName
PROFILEID = 'profile-plonetheme.plonetraining:default'


def common(context):
    setup = getToolByName(context, 'portal_setup')
    setup.runAllImportStepsFromProfile(PROFILEID)
