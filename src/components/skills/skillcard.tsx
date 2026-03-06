import type { TypesCardsSkill } from '../../types/types'


const SkillCard = ({ title , description, icon: Icon, brandColor }: TypesCardsSkill) => {
  return (
    <div 
      // Passamos a cor da marca como uma variável CSS para o Tailwind usar no hover
      style={{ '--brand-color': brandColor } as React.CSSProperties}
      className="min-w-70 md:min-w-[320px] p-6 rounded-xl bg-(--ui-surface) border-2 border-(--ui-border) transition-all duration-300 flex flex-col gap-4 snap-start group cursor-default hover:-translate-y-2 hover:border-(--brand-color) hover:shadow-[0_8px_30px_-10px_var(--brand-color)]"
    >
      {/* Cabeçalho do Card (Ícone + Título) */}
      <div className="flex items-center gap-4">
        <div 
          className="p-3 rounded-lg bg-(--bg-primary) transition-colors duration-300 group-hover:bg-(--brand-color)/10"
        >
          {/* O Ícone recebe a cor da marca */}
          <Icon size={28} color={brandColor} className="transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="text-xl font-bold text-(--text-primary)">{title}</h3>
      </div>

      {/* Descrição */}
      <p className="text-(--text-secondary) text-sm leading-relaxed mt-2">
        {description}
      </p>
    </div>
  );
};

export default SkillCard;