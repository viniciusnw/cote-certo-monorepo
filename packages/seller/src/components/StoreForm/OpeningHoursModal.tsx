import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  TextField,
  FormControl,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

import { Modal } from '../@base/Modal'
import { AutoComplete } from '../@base/AutoComplete'

type OpeningHoursModalProps = {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
};

type OpenHours = {
  open: string,
  close: string,
  day: { title: string; id: number } | undefined,
}

export function OpeningHoursModal({
  openModal,
  setOpenModal,
}: OpeningHoursModalProps) {
  const [openingHours, setOpeningHours] = React.useState<Array<OpenHours>>([]);

  const handlerAddOpeningHour = (openingHour: OpenHours) => {
    setOpeningHours([...openingHours, openingHour])
  }

  const handlerEditOpeningHour = (openingHour: OpenHours, idx: number) => {
    openingHours[idx] = openingHour
    setOpeningHours(openingHours)
  }

  const handlerRemoveOpeningHour = (idx: number) => {
    const filteredItems = openingHours.filter((itm, itemIdx) => itemIdx != idx)
    setOpeningHours(filteredItems)
  }

  return (
    <Modal
      size="xl"
      open={openModal}
      onClose={() => setOpenModal(false)}
      title="Adicionar horário de funcionamento"
    >
      <ModalContentStyled>
        {openingHours.map((oH, idx) => (
          <HourItem
            initialOpeningHour={oH}
            onRemoveOpeningHour={() => handlerRemoveOpeningHour(idx)}
            onEditOpeningHour={(openingHour: OpenHours) => handlerEditOpeningHour(openingHour, idx)}
          />
        ))}
        {openingHours.length < 7 && (
          <HourItem
            addedOpeningHours={openingHours}
            onAddOpeningHour={handlerAddOpeningHour}
          />
        )}
      </ModalContentStyled>
    </Modal>
  );
}

type HourItemProps = {
  initialOpeningHour?: OpenHours,
  addedOpeningHours?: Array<OpenHours>
  onRemoveOpeningHour?: () => void
  onAddOpeningHour?: (openingHour: OpenHours) => void,
  onEditOpeningHour?: (openingHour: OpenHours) => void
}

const HourItem: React.FC<HourItemProps> = ({
  initialOpeningHour,
  addedOpeningHours,
  onAddOpeningHour,
  onEditOpeningHour,
  onRemoveOpeningHour
}) => {
  const [openingHour, setOpeningHour] = React.useState<OpenHours>({
    day: initialOpeningHour?.day || undefined,
    open: initialOpeningHour?.open || '07:30',
    close: initialOpeningHour?.close || '17:00'
  });

  const [error, setError] = React.useState<string>();

  const weekDays = [
    { title: "Domingo", id: 1 },
    { title: "Segunda", id: 2 },
    { title: "Terça", id: 3 },
    { title: "Quarta", id: 4 },
    { title: "Quinta", id: 5 },
    { title: "Sexta", id: 6 },
    { title: "Sabado", id: 7 },
  ]

  const handlerAddOpeningHour = () => {
    if (openingHour.day) {
      setError('')
      onAddOpeningHour && onAddOpeningHour(openingHour)
      setTimeout(() => {
        setOpeningHour({ ...openingHour, day: undefined })
      });
    }
    else {
      setError('Escolha o dia')
    }
  }

  React.useEffect(() => {
    initialOpeningHour && setOpeningHour(initialOpeningHour)
  }, [initialOpeningHour]);
  return (
    <HourItemStyled>
      <FormControl>
        <AutoComplete
          size='small'
          label="Dia"
          error={error}
          items={weekDays}
          initialValue={openingHour.day}
          disabled={!!initialOpeningHour}
          onChange={(value) => setOpeningHour({ ...openingHour, day: value })}
          getOptionDisabled={option => !!addedOpeningHours?.find((element: any) => element.day.id === option.id)}
        />
      </FormControl>

      <FormControl>
        <TextField
          type="time"
          size='small'
          label="Abre às"
          variant="outlined"
          defaultValue={openingHour.open}
          onChange={(e) => {
            if (onEditOpeningHour) onEditOpeningHour({ ...openingHour, open: e.target.value })
            else setOpeningHour({ ...openingHour, open: e.target.value })
          }}
        />
      </FormControl>

      <FormControl>
        <TextField
          type="time"
          size='small'
          label="Fecha às"
          variant="outlined"
          defaultValue={openingHour.close}
          onChange={(e) => {
            if (onEditOpeningHour) onEditOpeningHour({ ...openingHour, close: e.target.value })
            else setOpeningHour({ ...openingHour, close: e.target.value })
          }}
        />
      </FormControl>

      <FormControl>
        {!initialOpeningHour ? (
          <Button
            size='large'
            color="secondary"
            variant="contained"
            onClick={handlerAddOpeningHour}
          >
            <Typography variant='body2'>
              Adicionar
            </Typography>
          </Button>
        ) : (
          <Button
            size='large'
            color="inherit"
            variant="contained"
            onClick={onRemoveOpeningHour}
          >
            <Typography variant='body2'>
              Remover
            </Typography>
          </Button>
        )}
      </FormControl>
    </HourItemStyled>
  )
}

const ModalContentStyled = styled(CardContent)`
  display: grid;
  min-width: 25vw;
  row-gap: 1.25rem;
`;

const HourItemStyled = styled.div`
  gap: 1rem;
  display: grid;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
