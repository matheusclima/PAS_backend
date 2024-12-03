import { Band } from 'src/bands/bands.entity';
import { Musician } from 'src/musicians/musicians.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bandMembers')
export class BandMember {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 100 })
  role: string;

  @Column({ type: 'date', nullable: true })
  joinedAt: Date;

  @ManyToOne(() => Band, (band) => band.members, { onDelete: 'CASCADE' })
  band: Band;

  @ManyToOne(() => Musician, (musician) => musician.bands, {
    onDelete: 'CASCADE',
  })
  musician: Musician;
}
