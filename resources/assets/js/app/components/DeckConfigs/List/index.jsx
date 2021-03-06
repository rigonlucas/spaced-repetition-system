import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Loader, Dimmer } from 'semantic-ui-react'

const DeckConfigsList = ({
  configsList,
  onEditClick,
  onDeleteClick,
  isLoading
}) => {
  return (
    <React.Fragment>
      <Dimmer.Dimmable as='div' dimmed={isLoading}>
        <Dimmer active={isLoading} inverted>
          <Loader/>
        </Dimmer>
        <div style={{ overflow: 'overlay' }}>

          <Table celled unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Nome</Table.HeaderCell>
                <Table.HeaderCell>Novos cards/dia</Table.HeaderCell>
                <Table.HeaderCell>
                  Tocar mídias automaticamente
                </Table.HeaderCell>
                <Table.HeaderCell>Ações</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {renderRows(configsList, onEditClick, onDeleteClick)}
            </Table.Body>
          </Table>

        </div>
      </Dimmer.Dimmable>
    </React.Fragment>
  )
}

function renderRows (configs, onEditClick, onDeleteClick) {
  return configs.map((conf, index) => (
    <Table.Row key={index}>
      <Table.Cell><strong>{conf.name}</strong></Table.Cell>
      <Table.Cell>{conf.new_cards_day}</Table.Cell>
      <Table.Cell>{conf.auto_play_media ? 'Sim' : 'Não'}</Table.Cell>
      <Table.Cell>
        <Button.Group>
          <Button color='yellow' onClick={() => onEditClick(conf)}>
            Editar
          </Button>
          <Button color='red' onClick={() => onDeleteClick(conf)}>
            Excluir
          </Button>
        </Button.Group>
      </Table.Cell>
    </Table.Row>
  ))
}

DeckConfigsList.propTypes = {}

export default DeckConfigsList
