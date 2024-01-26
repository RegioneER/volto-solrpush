import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Icon } from '@plone/volto/components';
import rightArrowSVG from '@plone/volto/icons/right-key.svg';
import { Plug } from '@plone/volto/components/manage/Pluggable';

const messages = defineMessages({
  elevate_settings: {
    id: 'Elevate settings',
    defaultMessage: 'Gestione elevate SOLR',
  },
});

export const ToolbarUserMenu = () => {
  const intl = useIntl();
  const token = useSelector((state) => state.userSession?.token);
  return token ? (
    <Plug pluggable="toolbar-user-menu" id="elevate-settings-toolbar">
      <li>
        <Link
          to="/controlpanel/elevate-settings"
          tabIndex={0}
          className="deleteBlocks"
          id="toolbar-customer-satisfaction-panel"
        >
          {intl.formatMessage(messages.elevate_settings)}{' '}
          <Icon name={rightArrowSVG} size="24px" />
        </Link>
      </li>
    </Plug>
  ) : null;
};

export default ToolbarUserMenu;
